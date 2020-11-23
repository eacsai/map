extern "C" {
  float sum_up(float vals[], int size);
}
float sum_up(float vals[], int size) {
  float res = 0;
  for(int i=0; i<size; i++)
    res += vals[i];
  return res;
}
int main() {
 float vals[] = {1., 2., 3.};
 sum_up(vals, 3);
 return 0;
}
