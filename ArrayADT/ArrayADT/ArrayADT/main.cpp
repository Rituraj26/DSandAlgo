#include<iostream>
using namespace std;

class Array {
private:
    int p[20];
    int size;
    int length;
public:
    Array(int*, int, int);
    void RShift(int);
    void LShift(int);
    void Swap(int*, int*);
    void Display();
    void Append(int);
    void Insert(int, int);
    void Delete(int);
    void LSearch(int);
    void BSearch(int);
    void Sort();
//    void sorting() {
//        sort(p, p+length);
//    }
    void Get(int);
    void Set(int, int);
    void Max();
    void Min();
    void Sum();
    void Avg();
    void Reverse();
    
    void InsertOnSorted(int);
    void IsSorted();
    void NegLeftSide();

};

Array::Array(int *ele, int size, int len) {
    if(!ele) return;
    for(int i=0; i<len; i++) {
        p[i] = *(ele + i);
    }
    this->size = size;
    this->length = len;
}

void Array::RShift(int pos) {
    for(int i=length; i>pos; i--) {
        p[i] = p[i-1];
    }
}

void Array::LShift(int pos) {
    for(int i=pos; i<length-1; i++) {
        p[i] = p[i+1];
    }
}

void Array::Swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}

void Array::Append(int ele) {
    if(length < size) {
        p[length] = ele;
        length++;
    }
}

void Array::Insert(int pos, int ele) {
    if(pos >=0 && length < size) {
        if(pos == length) {
            p[length] = ele;
        } else {
            RShift(pos);
            p[pos] = ele;
        }
        length++;
    }
}

void Array::Delete(int pos) {
    if(pos >= 0 && pos < length) {
        if(pos == length-1) {
            p[length-1] = 0;
        } else {
            LShift(pos);
        }
        length--;
    }
}

void Array::LSearch(int ele) {
    int i;
    for(i=0; i<length; i++) {
        if(p[i] == ele) {
            cout<<i;
            break;
        }
    }
    if(i == length)
        cout<<"Element not found"<<endl;
}

void Array::BSearch(int ele) {
    int l=0, h=length-1, mid;
    while(l <= h) {
        mid = (l + h) / 2;
        if(p[mid] == ele) {
            cout<<"Element found at "<<mid<<endl;
            break;
        } else if(mid > ele) {
            h = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    if(l > h)
        cout<<"Element not found"<<endl;
}

void Array::Sort() {
    int i, j;
    for(i=0; i<length-1; i++) {
        for(j=0; j<length-i-1; j++) {
            if(p[j] > p[j+1]) {
                Swap(&p[j], &p[j+1]);
            }
        }
    }
}

void Array::Get(int pos) {
    if(pos >= 0 && pos < length)
        cout<<"Element at index "<<pos<<" is "<<p[pos]<<endl;
    else
        cout<<"Invalid Index"<<endl;
}

void Array::Set(int pos, int ele) {
    if(pos >= 0 && pos < length) {
        p[pos] = ele;
    } else {
        cout<<"Invalid Index"<<endl;
    }
}

void Array::Max() {
    int max, i;
    max = p[0];
    for(i=1; i<length; i++) {
        if(max < p[i])
            max = p[i];
    }
    cout<<"Max Element is "<<max<<endl;
}

void Array::Min() {
    int min, i;
    min = p[0];
    for(i=1; i<length; i++) {
        if(min > p[i])
            min = p[i];
    }
    cout<<"Min Element is "<<min<<endl;
}

void Array::Sum() {
    int sum=0, i;
    for(i=0; i<length; i++) {
        sum += p[i];
    }
    cout<<"Sum of Elements is "<<sum<<endl;
}

void Array::Avg() {
    int sum=0, i, avg;
    for(i=0; i<length; i++) {
        sum += p[i];
    }
    avg = sum / length;
    cout<<"Average of Elements is "<<avg<<endl;
}

void Array::Reverse() {
    for(int i=0; i<(length/2); i++) {
        Swap(&p[i], &p[length-i-1]);
    }
}

void Array::InsertOnSorted(int ele) {
    int i = length-1;
    while(ele < p[i]) {
        p[i+1] = p[i];
        i--;
    }
    p[i+1] = ele;
    length++;
}

void Array::IsSorted() {
    int i;
    for(i=0; i<length-1; i++) {
        if(p[i+1] < p[i])
            break;
    }
    if(i == length-1)
        cout<<"Array is sorted";
    else
        cout<<"Array is not sorted";
    cout<<endl;
}

void Array::NegLeftSide() {
    int i=0, j=length-1;
    while(i <= j) {
        while(p[i] < 0)
            i++;
        while(p[j] > 0)
            j--;
        if(i < j)
            Swap(&p[i], &p[j]);
    }
}

void Array::Display() {
    cout<<"Array elements are :"<<endl;
    for(int i=0; i<length; i++) {
        cout<<p[i]<<endl;
    }
}

int main() {
//    int x[] = {9,3,2,5,6};
    int y[] = {-3,5,6,-2,5,0,1,0};
//    int z[] = {6,7,9,10,13};
    Array arr(y, 10, 5);
    arr.Display();
    arr.Append(5);
    arr.Display();
    arr.Insert(2, 20);
    arr.Delete(2);
    arr.Display();
    arr.LSearch(5);
    arr.Display();
    arr.Sort();
    arr.Display();
    arr.BSearch(1);
    arr.Get(2);
    arr.Set(2, 100);
    arr.Max();
    arr.Min();
    arr.Sum();
    arr.Avg();
    arr.Display();
    arr.Reverse();
    arr.Display();
    arr.IsSorted();
//    arr.Sort();
//    arr.Display();
//    arr.IsSorted();
//    arr.InsertOnSorted(0);
//    arr.Display();
    arr.NegLeftSide();
    arr.Display();
    return 0;
}
