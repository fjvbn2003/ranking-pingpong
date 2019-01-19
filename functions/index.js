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
}

// gameCreate 클라우드 함수 생성. (firestore games 문서가 추가될 때 발동)
exports.gameCreated = functions.firestore
    .document('games/{gameId}')
    .onCreate(doc =>{
        
        const game = doc.data();
        const notification={
            content: '새로운 경기가 등록되었습니다',
            referee_name: game.referee_name,
            result: `(${game.p1_name}) ${game.p1_score}:${game.p2_score} (${game.p2_name})`,
            time: admin.firestore.FieldValue.serverTimestamp(),
        }
        return createNotification(notification);
    })