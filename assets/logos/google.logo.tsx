import React from 'react';

interface Props {
	width: number;
}

const GoogleLogo = ({ width }: Props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={width}
			viewBox='0 0 375 375'
			version='1.0'
		>
			<path
				fill='#FFF'
				d='M 375 187.5 C 375 190.570312 374.925781 193.636719 374.773438 196.699219 C 374.625 199.765625 374.398438 202.824219 374.097656 205.878906 C 373.796875 208.933594 373.421875 211.976562 372.96875 215.011719 C 372.519531 218.046875 371.996094 221.070312 371.398438 224.078125 C 370.796875 227.089844 370.125 230.082031 369.378906 233.058594 C 368.636719 236.035156 367.816406 238.992188 366.925781 241.929688 C 366.035156 244.863281 365.074219 247.777344 364.039062 250.667969 C 363.003906 253.554688 361.902344 256.417969 360.726562 259.253906 C 359.554688 262.089844 358.308594 264.890625 356.996094 267.667969 C 355.6875 270.441406 354.308594 273.179688 352.859375 275.886719 C 351.414062 278.59375 349.902344 281.261719 348.324219 283.894531 C 346.746094 286.527344 345.105469 289.117188 343.402344 291.667969 C 341.695312 294.222656 339.929688 296.730469 338.101562 299.195312 C 336.273438 301.660156 334.386719 304.078125 332.4375 306.449219 C 330.492188 308.820312 328.488281 311.144531 326.429688 313.417969 C 324.367188 315.691406 322.253906 317.914062 320.082031 320.082031 C 317.914062 322.253906 315.691406 324.367188 313.417969 326.429688 C 311.144531 328.488281 308.820312 330.492188 306.449219 332.4375 C 304.078125 334.386719 301.660156 336.273438 299.195312 338.101562 C 296.730469 339.929688 294.222656 341.695312 291.667969 343.402344 C 289.117188 345.105469 286.527344 346.746094 283.894531 348.324219 C 281.261719 349.902344 278.59375 351.414062 275.886719 352.859375 C 273.179688 354.304688 270.441406 355.6875 267.667969 356.996094 C 264.890625 358.308594 262.089844 359.554688 259.253906 360.726562 C 256.417969 361.902344 253.554688 363.003906 250.667969 364.039062 C 247.777344 365.074219 244.863281 366.035156 241.929688 366.925781 C 238.992188 367.816406 236.035156 368.636719 233.058594 369.378906 C 230.082031 370.125 227.089844 370.796875 224.078125 371.398438 C 221.070312 371.996094 218.046875 372.519531 215.011719 372.96875 C 211.976562 373.421875 208.933594 373.796875 205.878906 374.097656 C 202.824219 374.398438 199.765625 374.625 196.699219 374.773438 C 193.636719 374.925781 190.570312 375 187.5 375 C 184.429688 375 181.363281 374.925781 178.300781 374.773438 C 175.234375 374.625 172.175781 374.398438 169.121094 374.097656 C 166.066406 373.796875 163.023438 373.421875 159.988281 372.96875 C 156.953125 372.519531 153.929688 371.996094 150.921875 371.398438 C 147.910156 370.796875 144.917969 370.125 141.941406 369.378906 C 138.964844 368.636719 136.007812 367.816406 133.070312 366.925781 C 130.136719 366.035156 127.222656 365.074219 124.332031 364.039062 C 121.445312 363.003906 118.582031 361.902344 115.746094 360.726562 C 112.910156 359.554688 110.105469 358.308594 107.332031 356.996094 C 104.558594 355.6875 101.820312 354.308594 99.113281 352.859375 C 96.40625 351.414062 93.738281 349.902344 91.105469 348.324219 C 88.472656 346.746094 85.882812 345.105469 83.332031 343.402344 C 80.777344 341.695312 78.269531 339.929688 75.804688 338.101562 C 73.339844 336.273438 70.921875 334.386719 68.550781 332.4375 C 66.179688 330.492188 63.855469 328.488281 61.582031 326.429688 C 59.308594 324.367188 57.085938 322.253906 54.917969 320.082031 C 52.746094 317.914062 50.632812 315.691406 48.570312 313.417969 C 46.511719 311.144531 44.507812 308.820312 42.558594 306.449219 C 40.613281 304.078125 38.726562 301.660156 36.898438 299.195312 C 35.070312 296.730469 33.304688 294.222656 31.597656 291.667969 C 29.894531 289.117188 28.253906 286.527344 26.675781 283.894531 C 25.097656 281.261719 23.585938 278.59375 22.140625 275.886719 C 20.691406 273.179688 19.3125 270.441406 18.003906 267.667969 C 16.691406 264.890625 15.445312 262.089844 14.273438 259.253906 C 13.097656 256.417969 11.996094 253.554688 10.960938 250.667969 C 9.925781 247.777344 8.964844 244.863281 8.074219 241.929688 C 7.183594 238.992188 6.363281 236.035156 5.621094 233.058594 C 4.875 230.082031 4.203125 227.089844 3.601562 224.078125 C 3.003906 221.070312 2.480469 218.046875 2.03125 215.011719 C 1.578125 211.976562 1.203125 208.933594 0.902344 205.878906 C 0.601562 202.824219 0.375 199.765625 0.226562 196.699219 C 0.0742188 193.636719 0 190.570312 0 187.5 C 0 184.429688 0.0742188 181.363281 0.226562 178.300781 C 0.375 175.234375 0.601562 172.175781 0.902344 169.121094 C 1.203125 166.066406 1.578125 163.023438 2.03125 159.988281 C 2.480469 156.953125 3.003906 153.929688 3.601562 150.921875 C 4.203125 147.910156 4.875 144.917969 5.621094 141.941406 C 6.363281 138.964844 7.183594 136.007812 8.074219 133.070312 C 8.964844 130.136719 9.925781 127.222656 10.960938 124.332031 C 11.996094 121.445312 13.097656 118.582031 14.273438 115.746094 C 15.445312 112.910156 16.691406 110.105469 18.003906 107.332031 C 19.3125 104.558594 20.691406 101.820312 22.140625 99.113281 C 23.585938 96.40625 25.097656 93.738281 26.675781 91.105469 C 28.253906 88.472656 29.894531 85.882812 31.597656 83.332031 C 33.304688 80.777344 35.070312 78.269531 36.898438 75.804688 C 38.726562 73.339844 40.613281 70.921875 42.558594 68.550781 C 44.507812 66.179688 46.511719 63.855469 48.570312 61.582031 C 50.632812 59.308594 52.746094 57.085938 54.917969 54.917969 C 57.085938 52.746094 59.308594 50.632812 61.582031 48.570312 C 63.855469 46.511719 66.179688 44.507812 68.550781 42.558594 C 70.921875 40.613281 73.339844 38.726562 75.804688 36.898438 C 78.269531 35.070312 80.777344 33.304688 83.332031 31.597656 C 85.882812 29.894531 88.472656 28.253906 91.105469 26.675781 C 93.738281 25.097656 96.40625 23.585938 99.113281 22.140625 C 101.820312 20.691406 104.558594 19.3125 107.332031 18.003906 C 110.105469 16.691406 112.910156 15.445312 115.746094 14.273438 C 118.582031 13.097656 121.445312 11.996094 124.332031 10.960938 C 127.222656 9.925781 130.136719 8.964844 133.070312 8.074219 C 136.007812 7.183594 138.964844 6.363281 141.941406 5.617188 C 144.917969 4.875 147.910156 4.203125 150.921875 3.601562 C 153.929688 3.003906 156.953125 2.480469 159.988281 2.03125 C 163.023438 1.578125 166.066406 1.203125 169.121094 0.902344 C 172.175781 0.601562 175.234375 0.375 178.300781 0.226562 C 181.363281 0.0742188 184.429688 0 187.5 0 C 190.570312 0 193.636719 0.0742188 196.699219 0.226562 C 199.765625 0.375 202.824219 0.601562 205.878906 0.902344 C 208.933594 1.203125 211.976562 1.578125 215.011719 2.03125 C 218.046875 2.480469 221.070312 3.003906 224.078125 3.601562 C 227.089844 4.203125 230.082031 4.875 233.058594 5.617188 C 236.035156 6.363281 238.992188 7.183594 241.929688 8.074219 C 244.863281 8.964844 247.777344 9.925781 250.667969 10.960938 C 253.554688 11.996094 256.417969 13.097656 259.253906 14.273438 C 262.089844 15.445312 264.890625 16.691406 267.667969 18.003906 C 270.441406 19.3125 273.179688 20.691406 275.886719 22.140625 C 278.59375 23.585938 281.261719 25.097656 283.894531 26.675781 C 286.527344 28.253906 289.117188 29.894531 291.667969 31.597656 C 294.222656 33.304688 296.730469 35.070312 299.195312 36.898438 C 301.660156 38.726562 304.078125 40.613281 306.449219 42.558594 C 308.820312 44.507812 311.144531 46.511719 313.417969 48.570312 C 315.691406 50.632812 317.914062 52.746094 320.082031 54.917969 C 322.253906 57.085938 324.367188 59.308594 326.429688 61.582031 C 328.488281 63.855469 330.492188 66.179688 332.4375 68.550781 C 334.386719 70.921875 336.273438 73.339844 338.101562 75.804688 C 339.929688 78.269531 341.695312 80.777344 343.402344 83.332031 C 345.105469 85.882812 346.746094 88.472656 348.324219 91.105469 C 349.902344 93.738281 351.414062 96.40625 352.859375 99.113281 C 354.304688 101.820312 355.6875 104.558594 356.996094 107.332031 C 358.308594 110.105469 359.554688 112.910156 360.726562 115.746094 C 361.902344 118.582031 363.003906 121.445312 364.039062 124.332031 C 365.074219 127.222656 366.035156 130.136719 366.925781 133.070312 C 367.816406 136.007812 368.636719 138.964844 369.378906 141.941406 C 370.125 144.917969 370.796875 147.910156 371.398438 150.921875 C 371.996094 153.929688 372.519531 156.953125 372.96875 159.988281 C 373.421875 163.023438 373.796875 166.066406 374.097656 169.121094 C 374.398438 172.175781 374.625 175.234375 374.773438 178.300781 C 374.925781 181.363281 375 184.429688 375 187.5 Z M 375 187.5'
			/>
			<path
				fill='#FFF'
				d='M 154.5 81.25 C 127.25 90.75 103.75 111 90.75 137 C 86.25 146 83 155.25 81 165.25 C 76 189.75 79.5 215.75 90.75 238 C 98 252.5 108.5 265.5 121.25 275.5 C 133.25 285 147.25 292.25 162 296 C 180.75 301 200.75 300.75 219.5 296.5 C 236.5 292.5 252.75 284.5 265.75 272.5 C 279.5 260 289 243.5 294.25 225.75 C 299.75 206.5 300.5 185.75 297 166 C 261.75 166 226.5 166 191.25 166 C 191.25 180.75 191.25 195.25 191.25 210 C 211.75 210 232 210 252.5 210 C 250.25 224 241.75 237 230 244.75 C 222.5 249.75 214 253 205.25 254.5 C 196.5 256 187.25 256.25 178.25 254.5 C 169.25 252.75 160.75 249 153.25 243.5 C 141.25 235 132 222.75 127.5 209 C 122.75 195 122.75 179.25 127.5 165.25 C 131 155.5 136.5 146.25 143.75 138.75 C 152.75 129.5 164.5 122.75 177.5 120 C 188.5 117.75 199.75 118 210.5 121.25 C 219.5 124 227.75 129 234.75 135.5 C 241.75 128.5 248.5 121.75 255.5 114.75 C 259.25 111 263 107.5 266.5 103.75 C 256 94 243.75 86.25 230.25 81.25 C 206 73 179 72.75 154.5 81.25 Z M 154.5 81.25'
			/>
			<path
				fill='#EA4335'
				d='M 154.5 81.5 C 178.75 73.25 206 73.25 230.25 82.25 C 243.5 87.25 256 94.75 266.25 104.75 C 262.75 108.5 259 112 255.5 115.75 C 248.5 122.75 241.75 129.5 234.75 136.5 C 228 130 219.75 125 210.5 122.25 C 200 119 188.25 118.5 177.5 121 C 165 123.75 153 130.5 144 139.75 C 136.75 147.25 131 156.25 127.75 166.25 C 115.5 156.75 103.25 147.25 91 137.75 C 104 111.25 127.25 90.75 154.5 81.5 Z M 154.5 81.5'
			/>
			<path
				fill='#FBBC05'
				d='M 81.25 165.25 C 83.25 155.5 86.5 146 91 137 C 103.25 146.5 115.5 156 127.75 165.5 C 123 179.5 123 195.25 127.75 209.25 C 115.5 218.75 103.25 228.25 91 237.75 C 79.75 215.75 76.25 189.75 81.25 165.25 Z M 81.25 165.25'
			/>
			<path
				fill='#4285F4'
				d='M 191.25 166.5 C 226.5 166.5 261.75 166.5 297 166.5 C 300.5 186.25 299.75 206.75 294.25 226 C 289 243.75 279.5 260 265.75 272.75 C 253.75 263.5 242 254.25 230 245 C 241.75 237 250 224.25 252.5 210.25 C 232 210.25 211.75 210.25 191.25 210.25 C 191.25 195.75 191.25 181 191.25 166.5 Z M 191.25 166.5'
			/>
			<path
				fill='#34A853'
				d='M 91 238 C 103.25 228.5 115.5 219 127.75 209.5 C 132.5 223.25 141.5 235.5 153.5 244 C 161 249.25 169.5 253 178.5 254.75 C 187.25 256.5 196.5 256.25 205.25 254.75 C 214 253.25 222.5 250 230 245 C 242 254.25 253.75 263.5 265.75 272.75 C 252.75 284.75 236.75 292.75 219.75 296.75 C 201 301 181 301.25 162.25 296.25 C 147.5 292.25 133.5 285.25 121.5 275.75 C 108.75 265.5 98.25 252.25 91 238 Z M 91 238'
			/>
		</svg>
	);
};

export default GoogleLogo;
