#include <algorithm>
#include <vector>

using namespace std;
class Solution
{
public:
  int getArea(int l, int r, vector<int> &height)
  {
    return (r - l) * min(height[l], height[r]);
  }

  int maxArea(vector<int> &height)
  {
    int l = 0, r = height.size() - 1;
    int mx = getArea(l, r, height);

    while (l < r)
    {
      mx = max(mx, getArea(l, r, height));

      if (height[l] < height[r])
      {
        l++;
      }
      else
      {
        r--;
      }
      mx = max(mx, getArea(l, r, height));
    }

    return mx;
  }
};