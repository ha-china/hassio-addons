import os
import json
import yaml
from pathlib import Path
from tabulate import tabulate

# 获取上一级目录
parent_dir = Path(__file__).parent.parent

# 初始化结果列表
results = []

# 遍历上一级目录的所有子目录
for subdir in parent_dir.iterdir():
    if subdir.is_dir():
        # 查找config文件
        config_files = list(subdir.glob('config.[jJ][sS][oO][nN]')) + list(subdir.glob('config.[yY][aA][mM][lL]'))
        
        for config_file in config_files:
            try:
                # 读取配置文件
                if config_file.suffix.lower() == '.json':
                    with open(config_file, 'r', encoding='utf-8') as f:
                        config = json.load(f)
                else:
                    with open(config_file, 'r', encoding='utf-8') as f:
                        config = yaml.safe_load(f)
                
                # 提取所需字段
                name = config.get('name', 'N/A')
                description = config.get('description', 'N/A')
                version = config.get('version', 'N/A')
                
                # 添加到结果列表
                results.append([name, description, version])
                
            except (json.JSONDecodeError, yaml.YAMLError) as e:
                print(f"Error parsing {config_file}: {e}")
                continue

# 生成Markdown表格
headers = ['Name', 'Description', 'Version']
markdown_table = tabulate(results, headers, tablefmt='github')

# 写入DOCS.md
with open('1_readme\\DOCS.md', 'w', encoding='utf-8') as f:
    f.write("# Configuration Summary\n\n")
    f.write(markdown_table)
