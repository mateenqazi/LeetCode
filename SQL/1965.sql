SELECT employee_id FROM Employees WHERE employee_id 
NOT IN (SELECT employee_id FROM Salaries)
UNION 
SELECT employee_id FROM Salaries WHERE employee_id 
NOT IN (SELECT employee_id FROM Employees)
ORDER BY 1 ASC


/* Learns NOT IN AND UNION 

The UNION operator is used to combine the result-set of two or more SELECT statements.

  Every SELECT statement within UNION must have the same number of columns
  The columns must also have similar data types
  The columns in every SELECT statement must also be in the same order

*/