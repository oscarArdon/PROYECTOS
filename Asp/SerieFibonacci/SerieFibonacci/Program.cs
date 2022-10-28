using System;

namespace SerieFibonacci
{
    class Program
    {
        static void Main(string[] args)
        {
            string val;
            int n, x=0, y=1, sum;
            Console.Write("Ingresa la cantidad de terminos que quieres para la serie:");
            val = Console.ReadLine();
            n = Int32.Parse(val);

            Console.WriteLine(x);
            Console.WriteLine(y);
            for (int i = 0; i < n; i++)
            {
               
                sum = x + y;
                Console.WriteLine(sum);
                x = y;
                y = sum;
            }

        }
    }
}
