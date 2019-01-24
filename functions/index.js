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
const updateUserRating = (winUser, up_rating, loose_user, down_rating) =>{
    admin.firestore().collection('users').doc(loose_user).update({rating: down_rating});
    return admin.firestore().collection('users').doc(winUser).update({rating: up_rating});
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
        const looseUser = game.whowin? game.p2_id: game.p1_id;
        
        const win_user_rating = game.whowin? game.p1_rating: game.p2_rating;
        const loose_user_rating = game.whowin? game.p2_rating: game.p1_rating;
        
        const diff = game.p1_rating - game.p2_rating>0 ? game.p1_rating - game.p2_rating: game.p2_rating - game.p1_rating ;
        let update_val = 0;
        //p1승리
        if(game.whowin){
            //p1이  rating 이 높은 경우
            if(game.p1_rating > game.p2_rating){
                update_val = Math.ceil(diff*0.01);
            }
            //p2가  rating 이 높은 경우
            else if(game.p1_rating < game.p2_rating){
                update_val = Math.ceil(diff*0.03);
            }
            else{
                update_val = 2;
            }
        }//p2 승리
        else{
            if(game.p1_rating > game.p2_rating){
                update_val = Math.ceil(diff*0.03);
            }
            else if(game.p1_rating < game.p2_rating){
                update_val = Math.ceil(diff*0.01);
            }
            else{
                update_val = 2;
            }
        }
        
        return updateUserRating(winUser, win_user_rating+update_val, looseUser, loose_user_rating-update_val);
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