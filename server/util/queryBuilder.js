const queryBuilder = (compId, month, year) => {
    let query = "select main_table.comp_id,main_table.month_year ,";
    query += " (select ROUND(amount,2) from  qbpl_profit_loss_data as a4 where a4.month_year= main_table.month_year and";
    query += " a4.comp_id = main_table.comp_id and a4.title IN('Total Income') limit 1) as sales_data,";
    query += " (select ROUND(SUM(amount+0),2) from  qbpl_profit_loss_data as a3 where a3.month_year= main_table.month_year";
    query += " and a3.comp_id = main_table.comp_id and a3.title IN('50110 Catering AM','50130 Catering PM') limit 1)  as catering,";
    query += " (select ROUND(amount,2) from  qbpl_profit_loss_data as a5 where a5.month_year= main_table.month_year and ";
    query += " a5.comp_id = main_table.comp_id and a5.title IN('56025 in Shop Labor') limit 1)  as labor_cost,";
    query += " (select ROUND(amount,2) from  qbpl_profit_loss_data as a6 where a6.month_year= main_table.month_year and";
    query += " a6.comp_id = main_table.comp_id and a6.title IN('Total 55000 Food Costs') limit 1)  as food_cost,";
    query += " (select ROUND(amount,2) from  qbpl_profit_loss_data as a2 where a2.month_year= main_table.month_year and";
    query += " a2.comp_id = main_table.comp_id and a2.title IN('50400 Sampling') limit 1)  as sampling,";
    query += " (select ROUND(amount,2) from  qbpl_profit_loss_data as a1 where a1.month_year= main_table.month_year and ";
    query += " a1.comp_id = main_table.comp_id and a1.title IN('50350 Overring') limit 1) as overring";
    query += " from";
    query += " (Select `id`,`comp_id`,`title`,`month_year`,`amount`,`group`,`fully_qualified_name` from qbpl_profit_loss_data";
    query += " where title IN('Total Income','50110 Catering AM','50130 Catering PM','56025 in Shop Labor','Total 55000 Food";
    query += " Costs','50400 Sampling','50350 Overring')) as main_table";
    query += " where comp_id = " + compId; 
    //query += " and month_year='12_2018' 
    query += " group by comp_id,month_year";

    return query;
}

module.exports = queryBuilder;