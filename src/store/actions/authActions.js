export const signIn = (credentials) =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        //로그인 요청
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password,
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type: 'LOGIN_ERROR',err})
        });

    }
}

export const signOut =  () =>{
    return (dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'LOGOUT_SUCCESS'});
        })
    }
}

export const signUp = (newUser) =>{
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            //add()는 doc을 추가하면서 key값을 firestore에서 자동으로 할당하는 것, doc()은 id를 직접 지정하는것
            return firestore.collection('users').doc(resp.user.uid).set({
                name: newUser.name,
                level: newUser.level,
                club: newUser.club,
                initial: newUser.name[1],
            })
        }).then(()=>{
            dispatch({type: 'SIGNUP_SUCCESS'});
        }).catch( err =>{
            dispatch({type: 'SIGNUP_ERROR',err})
        });
  
    }

}