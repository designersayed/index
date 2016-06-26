#include <iostream>
#include<stdio.h>
#include<cstdio>

using namespace std;

int main()
{
    int a,b,c;
    scanf("%d",&a);
    while(a--){
      printf("Enter Two Number :\n");
        scanf("%d %d",&b,&c);
        printf("%d\n",(b/3)*(c/3));
    }
    return 0;
}
