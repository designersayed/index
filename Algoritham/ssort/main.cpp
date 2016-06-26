#include<stdio.h>
#include<stdlib.h>
int a[100];
void ssort(int f){
if(f >= a[100]-1)
      return;
int min=f;
for(int i=f+1;i<a[100];i++){
      if(a[i]<a[min])
            min=i;
}
int swap=a[f];
a[f]=a[min];
a[min]=swap;
ssort(f++);

}
int main(){
int i,j,k;


}
