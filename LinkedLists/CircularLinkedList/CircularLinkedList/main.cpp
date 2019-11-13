#include<iostream>
using namespace std;

class Node {
public:
    int data;
    Node *next;
};

class CircularLinkedList {
    
private:
    Node *head;
    int length;
    
public:
    CircularLinkedList();
    ~CircularLinkedList();
    
    Node* CreateNode(int);
    
    void AddFirst(int);
    void AddMiddle(int, int);
    
    void DeleteFirst();
    void DeleteMiddle(int);
    
    void Display();
};

CircularLinkedList::CircularLinkedList() {
    head = NULL;
    length = 0;
}

CircularLinkedList::~CircularLinkedList() {
    cout<<"Obj is destroyed"<<endl;
}

Node* CircularLinkedList::CreateNode(int data) {
    Node *newNode = new Node();
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}

void CircularLinkedList::AddFirst(int data) {
    Node *newNode = CreateNode(data);
    Node *temp = head;
    if(head == NULL) {
        head = newNode;
        head->next = head;
    } else {
        while(temp->next != head)
            temp = temp->next;
        temp->next = newNode;
        newNode->next = head;
        head = newNode;
    }
    length++;
}

void CircularLinkedList::AddMiddle(int pos, int data) {
    Node *newNode = CreateNode(data);
    Node *temp = head;
    if(pos < 0 || pos > length)
        cout<<"Invalid Position"<<endl;
    else if(pos == 0) {
        if(head == NULL) {
            head = newNode;
            head->next = head;
        } else {
            while(temp->next != head)
                temp = temp->next;
//            cout<<temp->data<<"-"<<head->data;
            temp->next = newNode;
            newNode->next = head;
            head = newNode;
//            cout<<head->data<<"-";
        }
        length++;
    } else {
        for(int i=0; i<pos-1; i++)
            temp = temp->next;
        newNode->next = temp->next;
        temp->next = newNode;
        length++;
    }
}

void CircularLinkedList::DeleteFirst() {
    Node *temp = head;
    if(head == NULL)
        cout<<"No Node Available"<<endl;
    else {
        while(temp->next != head)
            temp = temp->next;
        temp->next = head->next;
        delete head;
        head = temp->next;
        length--;
    }
}

void CircularLinkedList::DeleteMiddle(int pos) {
    Node *prev = head;
    Node *next = head;
    if(pos < 0 || pos >= length)
        cout<<"Invalid Position"<<endl;
    else if(pos == 0) {
        DeleteFirst();
    } else {
        for(int i=0; i<pos-1; i++)
            prev = prev->next;
        next = prev->next;
        prev->next = next->next;
        delete next;
        length--;
    }
}

void CircularLinkedList::Display() {
    Node *temp = head;
    if(head == NULL)
        cout<<"No Elements Present";
    else {
        cout<<temp->data<<" ";
        while(temp->next != head) {
            temp = temp->next;
            cout<<temp->data<<" ";
        }
    }
    cout<<endl;
}

int main() {
    CircularLinkedList obj;
    
    obj.AddFirst(10);
    obj.AddMiddle(1, 13);
    obj.AddMiddle(1, 11);
    obj.Display();
    obj.DeleteMiddle(3);
    obj.DeleteFirst();
    obj.Display();
    
    return 0;
}

