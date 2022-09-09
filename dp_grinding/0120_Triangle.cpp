class Solution
{
public:
  int minimumTotal(vector<vector<int>> &triangle)
  {
    vector<int> *arr = new vector<int>(1);
    (*arr)[0] = triangle[0][0];
    for (int i = 1; i < triangle.size(); i++)
    {
      vector<int> *tmp = new vector<int>(triangle[i].size());
      (*tmp)[0] = (*arr)[0] + triangle[i][0];
      for (int j = 1; j < triangle[i].size() - 1; j++)
      {
        (*tmp)[j] = min((*arr)[j - 1], (*arr)[j]) + triangle[i][j];
      }
      (*tmp)[tmp->size() - 1] = arr->back() + triangle[i].back();
      arr = tmp;
    }
    int answer = (*arr)[0];
    for (int k = 1; k < arr->size(); k++)
    {
      answer = min(answer, (*arr)[k]);
    }
    return answer;
  }
};