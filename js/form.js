document.getElementById("input-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const variant = document.getElementById("variant");
    const group = document.getElementById("group");
    const phone = document.getElementById("phone-number");
    const idCard = document.getElementById("id-card");

    const nameRegex = /^[А-ЯІЇЄҐ][а-яіїєґ]{1,}\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const variantRegExp = /^\d{2}$/;
    const groupRegExp = /^[А-ЯІ]{2}-\d{2}$/;
    const phoneRegExp = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const idRegExp = /^[А-ЯІЇЄ]{2}\s№\d{6}$/;

    const fields = [
        {input: name, regex: nameRegex, output: "out-name"},
        {input: variant, regex: variantRegExp, output: "out-variant"},
        {input: group, regex: groupRegExp, output: "out-group"},
        {input: phone, regex: phoneRegExp, output: "out-phone"},
        {input: idCard, regex: idRegExp, output: "out-id"}
    ];

    fields.forEach(f => {
        const isValid = f.regex.test(f.input.value.trim());
        if (isValid) {
            f.input.classList.remove("error");
            document.getElementById(f.output).textContent = f.input.value.trim();
        } else {
            f.input.classList.add("error");
            document.getElementById(f.output).textContent = "";
        }
    });
});



