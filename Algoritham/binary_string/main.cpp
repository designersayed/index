#include<stdio.h>
char a[100];
char s='E';
char binary(int,int);
int main()
{
      int bi,k=0;
     //printf("Enter Element : ");
      //scanf("%d",&n);
      printf("Enter Integer : ");
      for(int i=65;i<84;i++){
            a[k]=i;

            //scanf("%c",&a[k]);
            printf("%c",a[k]);
      k++;}
            //char n=a[i];
            //scanf("%s",&a[ik
      //printf("Search number : ");
     // scanf("%c",s);
      bi=binary(0,26);

     printf("\nIndex %c is found at Location =%d\n",s,bi);

      return 0;

}
 char binary(int f,int l)
 {
       if(f>l)
            return -1;

       int m=(f+l)/2;

        if(a[m]==s)
            return m;

       else if(a[m]>s)
            return binary(f,m-1);
       return binary(m+1,l);
 }

