SELECT id, 'Root' as Type from Tree 
where p_id IS NULL
UNION
SELECT  id, 'Inner' as Type from Tree 
where p_id IS NOT NULL 
AND id IN (
            SELECT DISTINCT
            p_id FROM tree WHERE
            p_id IS NOT NULL
          )
UNION 
SELECT  id, 'Leaf' as Type from Tree 
where p_id IS NOT NULL 
AND id NOT IN (
                SELECT DISTINCT 
                p_id FROM tree WHERE
                p_id IS NOT NULL
              )