#include<stdio.h>
int a[100];
int s;
int binary(int,int);
int main()
{
      int i,n,bs;
      printf("Enter Element : ");
      scanf("%d",&n);
      printf("Enter Integer : ");
      for(i=0;i<n;i++)
            scanf("%d",&a[i]);
      printf("Search number : ");
      scanf("%d",&s);
      bs=binary(0,n);
      printf("Index %d is found at Location =%d",s,bs);

      return 0;

}
 int binary(int f,int l)
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
