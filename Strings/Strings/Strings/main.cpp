#include<iostream>
using namespace std;

class Strings {

public:
    int StringLen(char*);
    void CountWord(char*);
    void ValidateStr(char*);
    void ReverseStr(char*);
    void CompareStr(char*, char*);
    void Palindrome(char*);
    void FindDuplicates(char*);
    void CheckAnagram(char*, char*);
};

int Strings::StringLen(char str[]) {
    int c=0, i;
    for(i=0; str[i] != '\0'; i++)
        c++;
    return c;
}

void Strings::CountWord(char str[]) {
    int i, word=1;
    for(i=0; str[i] != '\0'; i++) {
        if(str[i] == ' ' && str[i-1] != ' ')
            word++;
    }
    cout<<word<<endl;
}

void Strings::ValidateStr(char str[]) {
    int i;
    for(i=0; i < StringLen(str); i++) {
        if(!(str[i] >= 65 && str[i] <= 90) && !(str[i] >= 97 && str[i] <= 122) && !(str[i] >= 48 && str[i] <= 57))
            break;
    }
    if(i == StringLen(str))
        cout<<"String is valid"<<endl;
    else
        cout<<"String is not valid"<<endl;
}

void Strings::ReverseStr(char str[]) {
    int i, c;
    char t;
    c = StringLen(str);
    for(i=0; i < (c / 2); i++) {
        t = str[i];
        str[i] = str[c-i-1];
        str[c-i-1] = t;
    }
    cout<<str<<endl;
}

void Strings::CompareStr(char s1[], char s2[]) {
    int x, y, min, i;
    x = StringLen(s1);
    y = StringLen(s2);
    min = x >= y? y : x;
    for(i=0; i < min; i++) {
        if(s1[i] != s2[i])
            break;
    }
    if(i == min)
        cout<<"Strings are same"<<endl;
    else
        cout<<"Strings are not same"<<endl;
}

void Strings::Palindrome(char s[]) {
    int c, i;
    c = StringLen(s);
    for(i=0; i < (c/2)+1; i++) {
        if(s[i] != s[c-i-1])
            break;
    }
    if(i == (c/2)+1)
        cout<<"String is a palindrome"<<endl;
    else
        cout<<"String is not a palindrome"<<endl;
}

void Strings::FindDuplicates(char s[]) {
    int i, H[26]={0};
    for(i=0; s[i] != '\0'; i++) {
        H[s[i] - 97]++;
    }
    for(i=0; i < 26; i++) {
        if(H[i] > 1)
            cout<<(char)(i + 97)<<" "<<H[i]<<endl;
    }
}

void Strings::CheckAnagram(char s1[], char s2[]) {
    int H1[26]={0}, i, x, y;
    x = StringLen(s1);
    y = StringLen(s2);
    if(x != y)
        cout<<"Strings are not anagrams"<<endl;
    else {
        for(i=0; i<x; i++)
            H1[s1[i] - 97]++;
        for(i=0; i<y; i++) {
            H1[s1[i] - 97]--;
            if(H1[s1[i] - 97] < 0)
                break;
        }
        if(i == y)
            cout<<"Strings are anagrams"<<endl;
        else
            cout<<"Strings are not anagrams"<<endl;
    }
}

int main() {
    char A[] = "How Are You";
    char B[] = "Ani%32Hs";
    char C[] = "madam";
    char D[] = "madam";
    char E[] = "verbose";
    char F[] = "observe";
    Strings s;
    s.CountWord(A);
    s.ValidateStr(B);
    s.ReverseStr(A);
    s.CompareStr(C, D);
    s.Palindrome(C);
    s.FindDuplicates(C);
    s.CheckAnagram(E,F);
    return 0;
}
