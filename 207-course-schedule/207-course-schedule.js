/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (numCourses === 1 || prerequisites.length === 0) return true

  const map = {}
  
  for (let i = 0; i <= numCourses; i++) {
    map[i] = []
  }

  for (const course of prerequisites) {
    if (map[course[0]]) {
      map[course[0]] = [...map[course[0]], course[1]]
    }
    else {
      map[course[0]] = [course[1]]
    }
  }

  const set = new Set()
  
  function dfs(course) {

    if (map[course].length === 0) return true
    
    if (set.has(course)) return false
    
    set.add(course)
    
    for (const prereq of map[course]) {
      if (!dfs(prereq)) return false
    }
    
    set.delete(course)
    map[course] = []
    
    return true
  }
  
  for (const course in map) {
    if (!dfs(course)) return false
  }
  
  return true
    
};