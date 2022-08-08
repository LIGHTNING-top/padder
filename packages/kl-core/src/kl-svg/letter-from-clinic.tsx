import * as React from "react"

export const LetterFromClinic: React.FC = () => {
	return (
		<svg
			width="35"
			height="35"
			viewBox="0 0 35 35"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<rect width="35" height="35" fill="url(#pattern0)" />
			<defs>
				<pattern
					id="pattern0"
					patternContentUnits="objectBoundingBox"
					width="1"
					height="1"
				>
					<use xlinkHref="#image0_67_403" transform="scale(0.0104167)" />
				</pattern>
				<image
					id="image0_67_403"
					width="96"
					height="96"
					xlinkHref="data:image/png;base64,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"
				/>
			</defs>
		</svg>
	)
}
