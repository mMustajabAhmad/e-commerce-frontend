export function getParentCategories(categories){
    const parentCategories = [];
    for (const category of categories){
        if (category.parent_category_id == null){
            parentCategories.push(category);
        }
    }
    return parentCategories;
}

export function getChildCategories(parentCategory, categories){
    const childCategories = [];
    for (const category of categories){
        if (category.parent_category_id == parentCategory.id){
            childCategories.push(category);
        }
    }
    return childCategories;
}


