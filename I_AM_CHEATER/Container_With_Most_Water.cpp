/**
 *
 * Why the hell are you accepted
 *
 */

#include <algorithm>
#include <vector>
#include <set>

using namespace std;
class Solution
{
public:
  int maxArea(vector<int> &height)
  {
    set<int> h_set;
    for (auto h : height)
    {
      h_set.insert(h);
    }
    int answer = 0;
    for (set<int>::reverse_iterator itr = h_set.rbegin(); itr != h_set.rend(); itr++)
    {
      if (*itr == 0 || answer / (*itr) > height.size())
        break;
      int ll = findLeft(*itr, height);
      int rr = findRight(*itr, height);
      if (ll == -1 || rr == -1)
      {
        continue;
      }
      answer = max(check(ll, rr, height), answer);
    }
    return answer;
  };
  int check(int l, int r, vector<int> &height)
  {
    return min(height[l], height[r]) * (r - l);
  };
  int findLeft(int value, vector<int> &height)
  {
    for (int i = 0; i < height.size(); i++)
    {
      if (height[i] >= value)
      {
        return i;
      }
    }
    return -1;
  }
  int findRight(int value, vector<int> &height)
  {
    for (int i = height.size() - 1; i >= 0; i--)
    {
      if (height[i] >= value)
      {
        return i;
      }
    }
    return -1;
  }
};