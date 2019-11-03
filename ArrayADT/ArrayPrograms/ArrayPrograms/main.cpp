#include<iostream>
using namespace std;

class Array {
    
public:
    void Swap(int*, int*);
    int Max(int*, int);
    
    void Merge(int*, int, int*, int);
    
    void Union(int*, int, int*, int);
    void Intersection(int*, int, int*, int);
    void Difference(int*, int, int*, int);
    
    void FindMissingElement(int*, int);
    void FindDuplicate(int*, int);
    void CountDuplicate(int*, int);
    void PairWithSumKUnsorted(int*, int, int);
    void PairWithSumKSorted(int*, int, int);
};

void Array::Swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

int Array::Max(int *x, int n) {
    int max = x[0];
    for(int i=1; i<n; i++) {
        if(max < x[i])
            max = x[i];
    }
    return max;
}

void Array::Merge(int *x, int X, int *y, int Y) {
    int a[X+Y], i=0, j=0, k=0;
    while(i < X && j < Y) {
        if(*(x+i) < *(y+j)) {
            a[k] = *(x+i);
            i++;
        } else {
            a[k] = *(y+j);
            j++;
        }
        k++;
    }
    if(i == X) {
        while(j != Y) {
            a[k] = *(y+j);
            j++;
            k++;
        }
    } else if(j == Y) {
        while(i != X) {
            a[k] = *(x+i);
            i++;
            k++;
        }
    }
    for(i=0; i<k; i++) {
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

void Array::Union(int *x, int X, int *y, int Y) {
    int a[X+Y], i=0, j=0, k=0;
    while(i < X && j < Y) {
        if(*(x+i) < *(y+j)) {
            a[k] = *(x+i);
            i++;
        } else if(*(x+i) > *(y+j)) {
            a[k] = *(y+j);
            j++;
        } else {
            a[k] = *(y+j);
            while(a[k] == *(x+i))
                i++;
            while(a[k] == *(y+j))
                j++;
        }
        k++;
    }
    if(i == X) {
        while(j != Y) {
            a[k] = *(y+j);
            j++;
            k++;
        }
    } else if(j == Y) {
        while(i != X) {
            a[k] = *(x+i);
            i++;
            k++;
        }
    }
    for(i=0; i<k; i++) {
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

void Array::Intersection(int *x, int X, int *y, int Y) {
    int a[X], i=0, j=0, k=0;
    while(i < X && j < Y) {
        if(*(x+i) < *(y+j)) {
            i++;
        } else if(*(x+i) > *(y+j)) {
            j++;
        } else {
            a[k] = *(y+j);
            while(a[k] == *(x+i))
                i++;
            while(a[k] == *(y+j))
                j++;
            k++;
        }
    }
    for(i=0; i<k; i++) {
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

void Array::Difference(int *x, int X, int *y, int Y) {
    int a[X], i=0, j=0, k=0;
    while(i < X && j < Y) {
        if(*(x+i) < *(y+j)) {
            a[k++] = *(x+i);
            i++;
        } else if(*(x+i) > *(y+j)) {
            j++;
        } else {
            i++;
            j++;
        }
    }
    if(j == Y) {
        while(i != X) {
            a[k] = *(x+i);
            i++;
            k++;
        }
    }
    for(i=0; i<k; i++) {
        cout<<a[i]<<" ";
    }
    cout<<endl;
}

void Array::FindMissingElement(int *x, int n) {
    for(int i=0; i<n-1; i++) {
        if(x[i+1] != x[i] + 1) {
            int temp = x[i] + 1;
            while(temp != x[i+1]) {
                cout<<"Missing Element is "<<temp<<endl;
                temp++;
            }
        }
    }
}

void Array::FindDuplicate(int *x, int n) {
    int ld=-999;
    for(int i=0; i<n-1; i++) {
        if(x[i] == x[i+1] && ld != x[i+1]) {
            cout<<x[i]<<" ";
            ld = x[i];
        }
    }
    cout<<endl;
}

//void Array::CountDuplicate(int *x, int n) {
//    int ld=-999, count=0, j;
//    for(int i=0; i<n-1; i++) {
//        if(x[i] == x[i+1] && (ld != x[i+1])) {
//            count = 0;
//            j = i;
//            while(x[j++] == x[i])
//                count++;
//            cout<<x[i]<<" is appearing "<<count<<" times"<<endl;
//            ld = x[i];
//        }
//    }
//}

// USING HASH TABLE COUNT DUPLICATES (ONLY +VE VALUES)

void Array::CountDuplicate(int *x, int n) {
    int max = Max(x, n);
    int *H = new int[max]{0};
    for(int i=0; i<n; i++) {
        H[x[i]]++;
    }
    for(int i=0; i<max; i++)
        if(H[i] > 1)
            cout<<i<<" ";
    cout<<endl;
    delete []H;
}

void Array::PairWithSumKUnsorted(int *x, int n, int k) {
    int max = Max(x, n);
    int *H = new int[max]{0};
    for(int i=0; i<n; i++) {
        if(H[k - x[i]] != 0)
            cout<<"Pair with sum "<<k<<" are ("<<x[i]<<", "<<k - x[i]<<")"<<endl;
        else
            H[x[i]]++;
    }
    delete []H;
}

void Array::PairWithSumKSorted(int *x, int n, int k) {
    int i=0, j=n-1;
    sort(x, x+n);
    while(i < j) {
        if(x[i] + x[j] == k) {
            cout<<"Pair with sum "<<k<<" are ("<<x[i]<<", "<<x[j]<<")"<<endl;
            i++;
            j--;
        } else if(x[i] + x[j] < k) {
            i++;
        } else {
            j--;
        }
    }
}

int main() {
    int x[] = {9,3,2,5,6};
    int y[] = {-3,5,6,-2,5,0,1,0};
    int z[] = {6,7,9,10,13};
    int w[] = {3,6,15,10,12,8,15,15,20,8};
    Array arr;
    sort(x, x+5);
    sort(y, y+8);
    arr.Merge(x, 5, y, 8);
    arr.Union(x, 5, y, 8);
    arr.Intersection(x, 5, y, 8);
    arr.Difference(x, 5, y, 8);
    arr.FindMissingElement(z, 5);
    arr.FindDuplicate(y, 8);
    arr.CountDuplicate(w, 10);
    arr.PairWithSumKUnsorted(w, 10, 18);
    cout<<endl;
    arr.PairWithSumKSorted(w, 10, 18);
    return 0;
}
