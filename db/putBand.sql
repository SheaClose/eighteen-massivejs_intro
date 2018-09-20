update bands
set year_formed = $1
where id = $2;

select *
from bands;