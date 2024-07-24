export function format(template, ...values) {
    return template.replace(/{}/g, () => values.shift());
}
