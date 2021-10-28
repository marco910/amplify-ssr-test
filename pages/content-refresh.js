export default function ContentRefresh({ data }) {
    const date = new Date();
    const localDate = date.toLocaleDateString("de-DE");
    const localTime = date.toLocaleTimeString("de-DE");

    console.log(data);

    return (
        <div>
            <h1>Demo Content</h1>
            <p>Last update: {localDate} {localTime}</p>

            <br /><br />

            <h2>Content</h2>
            {data.map(coffee => (
                <div key={coffee.uid}>
                    <h3>{coffee.blend_name}</h3>
                    <p>{coffee.notes}</p>
                    <p>Origin: {coffee.origin}</p>
                </div>
            ))}

        </div>
    );
}

export async function getStaticProps(context) {
    const res = await fetch(`https://random-data-api.com/api/coffee/random_coffee?size=10`);
    const data = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    };
}