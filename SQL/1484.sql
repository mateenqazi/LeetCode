SELECT sell_date,
COUNT(DISTINCT product) as num_sold ,		
GROUP_CONCAT(DISTINCT product ORDER BY product ASC SEPARATOR ',') AS products
from Activities 
Group BY sell_date 
Order BY sell_date ASC


# GROUP_CONCAT => The GROUP_CONCAT() function in MySQL is used to concatenate data from multiple rows into one field. This is an aggregate (GROUP BY) function which returns a String value, if the group contains at least one non-NULL value. Otherwise, it returns NULL.

