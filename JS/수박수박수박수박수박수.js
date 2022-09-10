function solution(n) {
    var answer = '';
    for(let i = 1; i <= n ; i++){
        if(i%2 === 0) answer += "박";
        else answer += "수";
}
    return answer;
}


function solution(n, answer = '') {
    for(let i = 1; i <= n ; i++)
        i%2 === 0 ? answer += "박" : answer += "수";
    return answer;
}