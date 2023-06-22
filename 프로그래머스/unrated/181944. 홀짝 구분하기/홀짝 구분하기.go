package main

import "fmt"

func main() {
    var a int
    odd := "is odd"
    even:= "is even"
    fmt.Scan(&a)
    if (a % 2 == 0 ){
        fmt.Printf("%d %s",a ,even)
        return
    }
    fmt.Printf("%d %s ",a , odd)
}