#include<iostream>
using namespace std;

class Node {
public:
    int data;
    Node *next;
};

template<class T>
class StackLinkedList {

private:
    Node *top;
    
public:
    StackLinkedList();
    ~StackLinkedList();
    
    Node* CreateNode(T);
    
    void Push(T);
    void Pop();
    void Display();
    
};

template<class T>
StackLinkedList<T>::StackLinkedList() {
    top = NULL;
}

template<class T>
Node* StackLinkedList<T>::CreateNode(T data) {
    Node *newNode = new Node();
    if(newNode == NULL)
        return NULL;
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

template<class T>
void StackLinkedList<T>::Push(T ele) {
    Node *newNode = CreateNode(ele);
    if(newNode == NULL)
        cout<<"Stack is Full"<<endl;
    else {
        newNode->next = top;
        top = newNode;
    }
}

template<class T>
void StackLinkedList<T>::Pop() {
    if(top == NULL)
        cout<<"Stack is Empty";
    else {
        Node *p = top;
        top = p->next;
        delete p;
    }
}

template<class T>
void StackLinkedList<T>::Display() {
    Node *p = top;
    while(p != NULL) {
        cout<<p->data<<" ";
        p = p->next;
    }
    cout<<endl;
}

template<class T>
StackLinkedList<T>::~StackLinkedList() {
    cout<<"Obj is destroyed"<<endl;
}

int main() {
    StackLinkedList<int> obj;
    
    obj.Push(5);
    obj.Push(10);
    obj.Push(15);
    obj.Push(20);
    obj.Display();
    obj.Pop();
    obj.Display();
    
    return 0;
}
