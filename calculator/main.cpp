#include <iostream>
#include <iomanip>
#include <string>
using namespace std;

double multiply(double a, double b)
{
    return a * b;
}
double addition(double a, double b)
{
    return a + b;
}
double subtract(double a, double b)
{
    return a - b;
}
double calcDivison(double a, double b)
{
    if (b == 0)
    {
        cout << "zero division error\n";
        return -1;
    }
    else
    {
        return a / b;
    }
}
double power(double a, double b)
{
    int power = 1;
    for (int i = 1; i <= b; i++)
    {
        power *= a;
    }
    return power;
}
int calcModulus(int a, int b)
{
    cout << "you was expected to enter integer values for % operation, otherwise decimals will be removed automatcally\n";
    return a % b;
}

int main()
{
    // int n;
    // cin >> n;
    // for (int i=1; i<=10; i++) {
    // cout << setw(3) << n << setw(3) << "x" << setw(3) << i << setw(3) << "=" << setw(3) << n*i << "\n";
    // }

    // int n;
    // cin >> n;
    // string str = "";
    // for (int i=1; i<=n; i++) {
    //     str+="*";
    //     cout << str << "\n";
    // }

    // int n;
    // cin >> n;
    // for (int i=n; i>=1; i--) {
    //     for (int j=1; j<=i; j++) {
    //         cout << "*";
    //     }
    //     cout << "\n";
    // }

    // int n;
    // cin >> n;
    // for (int i=1; i<=n; i++) {
    //     for (int j=1; j<=n-i; j++) {
    //         cout << " ";
    //     }
    //     for (int j=1; j<=i; j++) {
    //         cout << "*";
    //     }
    //     cout << "\n";
    // }

    // int n;
    // cin >> n;
    // for (int i=1; i<=n; i++) {
    //     Always check the most specific condition 1st
    //     if (i%3==0 && i%5==0) {
    //         cout << "FizzBuzz\n";
    //     }
    //     else if (i%3==0) {
    //         cout << "Fizz\n";
    //     }
    //     else if (i%5==0) {
    //         cout << "Buzz\n";
    //     }
    //     else {
    //         cout << i << "\n";
    //     }
    // }

    // int x, y, z, minimum, maximum;
    // cin >> x >> y >> z;
    // minMax(x, y, z, minimum, maximum);
    // cout << "min: " << minimum << "\n";
    // cout << "max: " << maximum << "\n";

    double a;
    double b;
    char c;
    while (true)
    {
        cout << "\nFollow this exact format: number_1 number2 operator_symbol_(* + - / ^ %)\nTo exit this calculator enter 3rd value as: q\n\nEnter: ";
        cin >> a >> b >> c;
        if (c == 'q') {
            break;
        }
        else if (c == '*')
        {
            cout << "\nAnswer: " << multiply(a, b) << "\n";
        }
        else if (c == '+')
        {
            cout << "\nAnswer: " << addition(a, b) << "\n";
        }
        else if (c == '-')
        {
            cout << "\nAnswer: " << subtract(a, b) << "\n";
        }
        else if (c == '%')
        {
            cout << "\nAnswer: " << calcModulus(a, b) << "\n";
        }
        else if (c == '/')
        {
            cout << "\nAnswer: " << calcDivison(a, b) << "\n";
        }
        else if (c == '^')
        {
            cout << "\nAnswer: " << power(a, b) << "\n";
        }
        else
        {
            cout << "\nError: Enter valid operator!\n\n";
        }
    }
    cout << "\nThanks for Calculating!\n\n";

    return 0;
}

// void minMax(int a, int b, int c, int &mn, int &mx) {
// mn = a; // assume a is min
// mx = a; // assume a is max

// if (b < mn) mn = b; // is b smaller?
// if (c < mn) mn = c; // is c smaller?

// if (b > mx) mx = b; // is b larger?
// if (c > mx) mx = c; // is c larger?
// }