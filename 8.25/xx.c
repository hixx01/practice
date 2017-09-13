#include<stdio.h>
#include<stdlib.h>

int clownNum[1500];

int Min(int a,int b,int c)
{
    int min =(a<b)?a:b;
    min = (min<c)?min:c;
    return min;
}

int GetclownNum(int index)
{
    if(index <= 0)
        return 0;

    clownNum[0] = 1;
    int CurrentIndex= 1;
    int *p2 = clownNum;
    int *p3 = clownNum;
    int *p5 = clownNum;

    while(CurrentIndex < index)
    {
        int min = Min(2*(*p2),3*(*p3),5*(*p5));
        clownNum[CurrentIndex] = min;


        while(2*(*p2) <= clownNum[CurrentIndex])
            ++p2;
        while(3*(*p3) <= clownNum[CurrentIndex])
            ++p3;
        while(5*(*p5) <= clownNum[CurrentIndex])
            ++p5;

        ++CurrentIndex;
    }

    int result = clownNum[index-1];
    return result;
}

int main()
{
    int n;
    while(scanf("%d",&n) != EOF)
        printf("%d\n",GetclownNum(n));
    return 0;
}