var arr = [1,2,3,4]
var ans = []
subset(arr,ans,0)
function subset(arr,ans,curr){
    for(var i=0; i<arr.length; i++){
        var val = arr[i]
        subset(arr,i+1)
    }
}


import java.util.Scanner;
class Main{
    public static void main(String [] args){
        Scanner sc=new Scanner(System.in);
        int T=sc.nextInt();
        String str=sc.next();
        funct(str,"",0);
    }
    
    static void funct(String str,String temp,int curr)
    {
        if(curr==str.length())return;
        for (int i=curr;i<str.length();i++)
        {
            System.out.println(temp+str.charAt(i));
            funct(str,temp+str.charAt(i),i+1);
        }
    }
}
