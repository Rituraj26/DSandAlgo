#include<iostream>
using namespace std;

template<class T>
class Stack {
    
private:
    int top;
    int size;
    T *p;
    
public:
    Stack();
    Stack(T);
    ~Stack();
    
    void Push(T);
    void Pop();
    void Peek(int);
    void StackTop();
    int IsEmpty();
    int IsFull();
    void Display();
    
};

template<class T>
Stack<T>::Stack() {
    size = 10;
    top = -1;
    p = new T[size];
}

template<class T>
Stack<T>::Stack(T size) {
    this->size = size;
    top = -1;
    p =  new T[size];
}

template<class T>
int Stack<T>::IsFull() {
    if(top == size-1)
        return 1;
    return 0;
}

template<class T>
int Stack<T>::IsEmpty() {
    if(top == -1)
        return 1;
    return 0;
}

template<class T>
void Stack<T>::Push(T ele) {
    if(IsFull())
        cout<<"Stack is full"<<endl;
    else
        p[++top] = ele;
}

template<class T>
void Stack<T>::Pop() {
    if(IsEmpty())
        cout<<"Stack is Empty";
    else {
        int x = p[top--];
        cout<<"Deleted element is: "<<x;
    }
    cout<<endl;
}

template<class T>
void Stack<T>::Peek(int pos) {
    if(top-pos+1 < 0)
        cout<<"Invalid Position";
    else {
        int x = p[top-pos+1];
        cout<<"Element at the given index is: "<<x;
    }
    cout<<endl;
}

template<class T>
void Stack<T>::Display() {
    for(int i = top; i >= 0; i--)
        cout<<p[i]<<" ";
    cout<<endl;
}

template<class T>
Stack<T>::~Stack() {
    cout<<"Obj is deleted"<<endl;
}

int main() {
    Stack<int> obj(5);
    
    obj.Push(5);
    obj.Push(10);
    obj.Push(15);
    obj.Push(20);
    obj.Push(25);
    obj.Pop();
    obj.Display();
    obj.Peek(2);
}
