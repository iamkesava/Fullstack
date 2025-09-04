import pandas as pd
from .models import COGSReport

def import_cogs_from_excel(file_path):
    df = pd.read_excel(file_path, sheet_name=0)

    print("Detected columns:", df.columns.tolist())

    for _, row in df.iterrows():
        COGSReport.objects.create(
            cost_centre=row["Production Place"],   # ✅ fixed
            gross_sales=row["Gross Sales (before discount), AED."],
            discount=row["Discount amount, AED."],
            net_sales=row["Ex Tax"],
            cogs_recipe=row["Cost, AED."],
            wastages=0,
            condiments=0,
            inventory_variances=0,
            actual_total_cogs=row["Cost, AED."],
            cogs_percent=(row["Cost, AED."] / row["Ex Tax"] * 100) if row["Ex Tax"] else 0
        )
