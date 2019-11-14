#include<iostream>
#include<queue>
using namespace std;

template<class T>
class Node {
public:
    Node *left;
    T data;
    Node *right;
};

template<class T>
class Tree {
    
private:
    queue<Node<T>*> q;
    Node<T> *root;
    
public:
    
    Node<T> *CreateNode(T);
    void CreateTree();
    void Preorder() {Preorder(root);}
    void Preorder(Node<T>*);
    void Inorder() {Inorder(root);}
    void Inorder(Node<T>*);
    void Postorder() {Postorder(root);}
    void Postorder(Node<T>*);
    void Levelorder() {Levelorder(root);}
    void Levelorder(Node<T>*);
    
};

template<class T>
Node<T>* Tree<T>::CreateNode(T data) {
    Node<T> *newNode = new Node<T>;
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}

template<class T>
void Tree<T>::CreateTree() {
    Node<T> *p, *t;
    T x;
    cout<<"Enter the root data: ";
    cin>>x;
    root = CreateNode(x);
    q.push(root);
    while(!q.empty()) {
        p = q.front();
        q.pop();
        cout<<"Enter the left child of "<<p->data<<": ";
        cin>>x;
        if(x != 'z') {
            t = CreateNode(x);
            p->left = t;
            q.push(t);
        }
        cout<<"Enter the right child of "<<p->data<<": ";
        cin>>x;
        if(x != 'z') {
            t = CreateNode(x);
            p->right = t;
            q.push(t);
        }
    }
}

template<class T>
void Tree<T>::Preorder(Node<T> *p) {
    if(p) {
        cout<<p->data<<" ";
        Preorder(p->left);
        Preorder(p->right);
    }
}

template<class T>
void Tree<T>::Inorder(Node<T> *p) {
    if(p) {
        Inorder(p->left);
        cout<<p->data<<" ";
        Inorder(p->right);
    }
}

template<class T>
void Tree<T>::Postorder(Node<T> *p) {
    if(p) {
        Postorder(p->left);
        Postorder(p->right);
        cout<<p->data<<" ";
    }
}

int main() {
    
    Tree<char> obj;
    obj.CreateTree();
    obj.Preorder();
    cout<<endl;
    obj.Inorder();
    cout<<endl;
    obj.Postorder();
    cout<<endl;
//    obj.Levelorder();
    cout<<endl;
    
    return 0;
}
