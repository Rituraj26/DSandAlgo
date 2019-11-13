#include<iostream>
using namespace std;

template<class T>
class Node {
public:
    T data;
    Node<T> *next;
};

template<class T>
class QueneLinkedList {
    
private:
    Node<T> *front;
    Node<T> *rear;
    int length;
    
public:
    QueneLinkedList();
    ~QueneLinkedList();
    
    Node<T>* CreateNode(T);
    void Enquene(T);
    void Dequene();
    void Display();
};

template<class T>
QueneLinkedList<T>::QueneLinkedList() {
    front = NULL;
    rear = NULL;
    length = 0;
}

template<class T>
Node<T>* QueneLinkedList<T>::CreateNode(T data) {
    Node<T> *newNode = new Node<T>();
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

template<class T>
void QueneLinkedList<T>::Enquene(T data) {
    Node<T> *newNode = CreateNode(data);
    if(front == NULL) {
        front = newNode;
    } else {
        rear->next = newNode;
    }
    rear = newNode;
    length++;
}

template<class T>
void QueneLinkedList<T>::Dequene() {
    Node<T> *tmp = front;
    if(front == NULL)
        cout<<"Quene is empty"<<endl;
    else {
        front = front->next;
        delete tmp;
    }
}

template<class T>
void QueneLinkedList<T>::Display() {
    Node<T> *tmp = front;
    while(tmp != NULL) {
        cout<<tmp->data<<" ";
        tmp = tmp->next;
    }
    cout<<endl;
}

template<class T>
QueneLinkedList<T>::~QueneLinkedList() {
    cout<<"Object is destroyed"<<endl;
}

int main() {
    
    QueneLinkedList<int> obj;
    
    obj.Enquene(5);
    obj.Enquene(10);
    obj.Enquene(15);
    obj.Enquene(20);
    obj.Display();
    obj.Dequene();
    obj.Display();
    
    return 0;
}
