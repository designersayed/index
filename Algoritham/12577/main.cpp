#include <iostream>
#include<stdio.h>
#include<cstdio>
#include<cstring>
using namespace std;

int main()
{
    char s[100];
    int count=1;

    while(true){

      printf("Enter Name :\n");
       scanf("%s",s);
        if(strcmp(s,"*")==0)
            return 0;
        printf("Case %d : ",count++);
            if(strcmp(s,"Hajj")==0)
              printf("Hajj-e-Akbar\n");

            else if(strcmp(s,"Umrah")==0)
              printf("Hajj-e-Asgher\n");

    }
    return 0;
}
