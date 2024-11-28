import image from "../assets/image_post.jpg";

export default function Main() {
	return (
		<main>
			<div className="container">
				<div className="card mb-5">
					<img
						src={image}
						className="card-img-top img-fluid mx-auto"
						alt="montagna"
					/>
					<div className="card-body">
						<h5 className="card-title">Titolo del Post</h5>
						<p className="card-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ad
							magnam delectus tempore reprehenderit quasi eveniet, sapiente eos
							aliquid iste similique est ipsum repellat velit repellendus
							perferendis rem harum adipisci.
						</p>
						<button>Leggi di più</button>
					</div>
				</div>
			</div>
		</main>
	);
}
