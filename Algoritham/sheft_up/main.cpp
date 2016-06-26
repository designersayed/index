#include <iostream>
#include <stdlib.h>
#include <stdio.h>

using namespace std;
int heap[100];
int n=0;

void shift_up(int post)
{
      if(post==1)
            return;
      int parent=post/2;
      if(heap[parent]>heap[post])
      {
            int swap=heap[parent];
            heap[parent]=heap[post];
            heap[post]=swap;
      }
      shift_up(parent);
}
void insert(int i)
{
      n++;
      heap[n]=i;
      shift_up(n);

}

int main()
{
    int number;
    freopen("input.txt","r",stdin);
    for(int i=0;i<9;i++){
      scanf("%d",&number);
    insert(number);
    }
    for(int i=1;i<9;i++){
      printf("%3d",heap[i]);
    }
    return 0;
}
