function num (arr) {
    let countlike = 0
    let countDislike = 0



    for (let i=0; i<arr.length; i++ ){
        if(arr[i]==='like'){
            countlike++
        }else if (arr[i]==='dislike'){
            countDislike++
        }
    }
    console.log('likelar',countlike +'ta');
    console.log('dislikelar', countDislike +'ta');
    if(countlike>countDislike){
        return true
    }else{
        return false
    }
}
console.log(num(['dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike','like','dislike',]));

























