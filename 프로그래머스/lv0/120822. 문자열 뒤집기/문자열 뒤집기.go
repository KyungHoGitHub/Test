func solution(my_string string) string {
    test := []rune(my_string)
    
    for i,j :=0 , len(test)-1; i<j; i,j = i+1, j-1{
        test[i], test[j] = test[j],test[i]
    }
    return string(test)
}