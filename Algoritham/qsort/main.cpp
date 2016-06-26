#include <iostream>
#include<stdio.h>
#include<stdlib.h>

using namespace std;
void qsort(int,int);
int a[100];

int main()
{
    int i;
    for(i=0;i<100;i++){
      a[i]=rand()%100;
      printf("%3d",a[i]);
    }
    puts("\n \n");
    qsort(0,99);
    for(i=0;i<100;i++){
      printf("%3d",a[i]);
    }
    return 0;
}
void qsort(int l,int h){
    if(l==h)
      return;
    int i=l,j=h;
    int pe=l;
    int swap;
    while(i<j){
      for(;i<j;i++){
            if(a[i]>a[pe])
                  break;
      }
      for(;j>i;j--){
            if(a[j]<a[pe])
                  break;
      }
      if(i<j){
            swap=a[i];
            a[i]=a[j];
            a[j]=swap;
      }
    }
    swap=a[pe];
    a[pe]=a[i-1];
    a[i-1]=swap;
    qsort(l,i-1);
    qsort(i,h);
}
