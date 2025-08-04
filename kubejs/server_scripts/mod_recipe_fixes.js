// mod_recipe_fixes.js
ServerEvents.recipes(event => {
    // 以下来自其他模组的配方在KubeJS加载时导致解析错误。
    // 我们在此处移除它们，以防止日志刷屏和潜在问题。
    // 如果这些配方至关重要，可能需要以KubeJS兼容的格式手动重新添加它们。

    const recipesToRemove = [
        // tf_dnv recipes
        'tf_dnv:lumber_table',
        'tf_dnv:composter',
        'tf_dnv:mycologist_table',
        'tf_dnv:mushgloom_torch',
        'tf_dnv:alchemy_table',
        'tf_dnv:butcher_table',

        // lendersdelight recipes
        'lendersdelight:crystallized_coral_pie',
        'lendersdelight:crystallized_coral_pie_from_slices'
    ];

    recipesToRemove.forEach(recipeId => {
        event.remove({ id: recipeId });
    });

    console.log('[KubeJS Fix] 已移除导致解析错误的第三方模组配方。');
});
