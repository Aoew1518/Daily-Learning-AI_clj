let str = 'yesasey'

function isPalindrome(s){
    // return str.split('').reverse().join('') == s
    let i = 0,j=s.length - 1;
    while(i<j){
        if (s[i]==s[j]){
            i++;
            j--;
        }
        else
            return false;
    }
    return true
}
console.log(isPalindrome(str))