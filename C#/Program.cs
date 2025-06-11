using System.Drawing;

namespace TestTaskC_
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] pop = new int[3];
            int goalColor;

            Console.WriteLine("Enter index of color");
            while (!int.TryParse(Console.ReadLine(), out goalColor) || goalColor > 2 || goalColor < 0)
            {
                Console.WriteLine("Incorrect index. Enter correct index");
            }

            Console.WriteLine("Enter population array");
            while (!TryParseArr(goalColor, out pop))
            {
                Console.WriteLine("Incorrect array. Enter correct numbers");
            }

            if (CheckPossible(pop))
            {
                Console.WriteLine(-1);
                return;
            }

            Console.WriteLine(CalculateMeetingsCount(pop));
        }

        private static bool TryParseArr(int goalColor, out int[] pop)
        {
            pop = new int[3];
            string[] colors = Console.ReadLine()
                .Split(' ', StringSplitOptions.RemoveEmptyEntries)
                .ToArray();

            if(!int.TryParse(colors[goalColor], out pop[0])) return false;

            int j = 1;

            for(int i = 0; i < 3; i++)
            {
                if(i != goalColor)
                {
                    if (!int.TryParse(colors[i], out pop[j++])) return false;
                }
            }

            if (pop[1] < pop[2])
            {
                int temp = pop[1];
                pop[1] = pop[2];
                pop[2] = temp;
            }

            return true;
        }

        private static int CalculateMeetingsCount(int[] pop)
        {
            if (pop[1] == pop[2]) return pop[2];

            int count = 0;
            int delta;
            
            while (pop[1] != 0)
            {
                count += pop[2];
                pop[0] += pop[2] * 2;
                pop[1] -= pop[2];
                pop[2] = 0;

                delta = (pop[1] - pop[2]) / 3;
                if (pop[0] < delta) delta = pop[0];

                pop[0] -= delta;
                pop[1] -= delta;
                pop[2] += delta * 2;
                count += delta;
            }

            return count;
        }

        private static bool CheckPossible(int[] pop)
        {
            if ((pop[1] - pop[2]) % 3 == 0
                || (pop[0] == 0 && pop[1] == 0)
                || (pop[0] == 0 && pop[2] == 0)
                || (pop[1] == 0 && pop[2] == 0)) 
                return false;
            else
                return true;
        }
        // Пояснення Math.Abs(pop[1] - pop[2]) % 3
        // При "добиранні" їжачків нецільового кольору +2 їжачка одного нецільового кольору
        // і -1 їжачок другого нецільового кольору. Таким чином, якщо різниця в їх кількості
        // не кратна 3, кількості їжачків нецільових кольорів не зможуть зрівнятись(а саме це
        // потрібно для досягнення мети їжачків)
    }
}
