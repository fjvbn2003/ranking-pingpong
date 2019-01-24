const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello 랭킹핑퐁!");
});

const createNotification = (notification) => {
    return admin.firestore().collection('notifications')
        .add(notification)
        .then(doc => console.log('notification added', doc));
};
const updateUserRating = (winUser, new_rating) =>{
    return admin.firestore().collection('users').doc(winUser).update({rating: new_rating});

}


// gameCreate 클라우드 함수 생성. (firestore games 문서가 추가될 때 발동)
exports.gameCreated = functions.firestore
    .document('games/{gameId}')
    .onCreate(doc =>{
        
        const game = doc.data();
        const notification={
            content: '새로운 경기가 등록되었습니다',
            result: `${game.p1_name} ${game.p1_score}:${game.p2_score} ${game.p2_name}`,
            time: admin.firestore.FieldValue.serverTimestamp(),
            game_id: doc.id,
            type:'new_game',
        }
        //game이 생성되었을 때 실시간으로 유져의 rating 을 수정


        return createNotification(notification);
    });

exports.gameCreated2 = functions.firestore
    .document('games/{gameId}')
    .onCreate(doc =>{   
        const game = doc.data();
        const winUser = game.whowin? game.p1_id: game.p2_id;
        const user_rating = game.whowin? game.p1_rating: game.p2_rating;
        const diff = game.p1_rating - game.p2_rating>0 ? game.p1_rating - game.p2_rating: game.p2_rating - game.p1_rating ;
        return updateUserRating(winUser, user_rating+diff);
    });


exports.userJoined = functions.auth.user()
    .onCreate(user =>{
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc=>{
                const newUser = doc.data();
                const notification={
                    content: '새로운 선수가 랭퐁에 참가하였습니다',
                    result: `이름: ${newUser.name} , 부수: ${newUser.level} , 구장:${newUser.club}`,
                    time: admin.firestore.FieldValue.serverTimestamp(),
                    user_id: user.uid,
                    type: 'new_user',
                }
                return createNotification(notification);
            })
    })