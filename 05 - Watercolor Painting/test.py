def newton(fx1,fx2,x0,xb,x_max):
    for n in range(0,x_max):
        fx1xn = fx1(x0)
        if abs(fx1xn) < xb:
            print('Found solution after',n,'iterations.')
            return x0
        fx2xn = fx2(x0)
        if fx2xn == 0:
            print('Zero derivative. No solution found.')
            return None
        x0 = x0 - fx1xn/fx2xn
    print('Exceeded maximum iterations. No solution found.')
    return None


    # x0 : number
    #     Initial guess for a solution f(x)=0.
    # xb : number
    #     Stopping criteria is abs(f(x)) < epsilon.
    # x_max : integer
    #     Maximum number of iterations of Newton's method.

fx1 = lambda x: x**3 - 5
fx2= lambda x: 3*x**2 
ans = newton(fx1,fx2,1,1e-10,10)
print(ans)