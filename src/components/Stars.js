import Star from './Star';

export default function Stars({ count }) {
	if (Number.isInteger(count) && 0 < count && count <= 5) {
		return (
			<ul className="card-body-stars u-clearfix">
				{Array.from({length: count}).map((_, index) => (
					<Star key={index}/>
				))}
			</ul>
		)
	}
}
