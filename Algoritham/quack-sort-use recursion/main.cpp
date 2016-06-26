// quickSort.c
#include <stdio.h>

void quickSort( int[], int, int);


int main()
{
	int a[] = { 7, 12, 1, -2, 0, 15, 4, 11, 9};

	int i;
	printf("\n\nUnsorted array is:  ");
	for(i = 0; i < 9; ++i)
		printf(" %d ", a[i]);

	quickSort( a, 0, 9);

	printf("\n\nSorted array is:  ");
	for(i = 0; i < 9; ++i)
		printf(" %d ", a[i]);

}
void quickSort(int arr[], int l, int r) {

      int tmp;
      int pivot = arr[(l+r)/2];

      /* partition */
      while (l <= r) {
            while (arr[l] < pivot)
                  l++;
            while (arr[r] > pivot)
                  r--;
            if (l <= r) {
                  tmp = arr[l];
                  arr[l] = arr[r];
                  arr[r] = tmp;
                  l++;
                  r--;
            }
      }

      /* recursion */
      if (l < r)
            quickSort(arr, l, r);
      if (l < r)
            quickSort(arr, r, l);
}

