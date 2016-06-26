// priority_queue::push/pop
#include<stdio.h>
#include <iostream>       // std::cout
#include <queue>          // std::priority_queue
using namespace std;
int main ()
{
   std::priority_queue<int>pq;

  pq.push(30);
  pq.push(100);
  pq.push(25);
  pq.push(40);
  printf("Popping out of element : ");
  while (!pq.empty())
  {
     printf("\n%d\n",pq.top());
     pq.pop();
  }

  return 0;
}
