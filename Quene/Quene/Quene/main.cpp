#include<iostream>
using namespace std;

template<class T>
class CircularQuene {
    
private:
    int front;
    int rear;
    int size;
    T *p;
    
public:
    CircularQuene();
    CircularQuene(int);
    ~CircularQuene();
    
    void Enquene(T);
    void Dequene();
    void Display();
};

template<class T>
CircularQuene<T>::CircularQuene() {
    size = 5;
    front = 0;
    rear = 0;
    p = new T[size];
}

template<class T>
CircularQuene<T>::CircularQuene(int size) {
    this->size = size;
    front = 0;
    rear = 0;
    p = new T[size];
}

template<class T>
void CircularQuene<T>::Enquene(T ele) {
    if((rear + 1) % size == front)
        cout<<"Quene is full"<<endl;
    else {
        rear = (rear + 1) % size;
        p[rear] = ele;
    }
}

template<class T>
void CircularQuene<T>::Dequene() {
    T x;
    if(front == rear)
        cout<<"Quene is empty";
    else {
        front = (front + 1) % size;
        x = p[front];
        cout<<"Deleted element is: "<<x;
    }
    cout<<endl;
}

template<class T>
void CircularQuene<T>::Display() {
    int temp = (front + 1) % size;
    while(temp != (rear + 1) % size) {
        cout<<p[temp]<<" ";
        temp = (temp + 1) % size;
    }
    cout<<endl;
}

template<class T>
CircularQuene<T>::~CircularQuene() {
    cout<<"Object is destroyed"<<endl;
}

int main() {
    
    CircularQuene<int> obj;
    
    obj.Enquene(5);
    obj.Enquene(4);
    obj.Enquene(10);
    obj.Enquene(7);
    obj.Dequene();
    obj.Display();
    
    return 0;
}
