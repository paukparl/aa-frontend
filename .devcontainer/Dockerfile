# Use a Node.js base image
FROM node:20

# Set the working directory
WORKDIR /workspace

# Install necessary tools and dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    zsh \
    vim \
    sudo \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Oh My Zsh for a better terminal experience
RUN sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Copy source code
COPY . .

# Expose the default Next.js port
EXPOSE 3000

# Set the default shell to zsh
SHELL ["/bin/zsh", "-c"]

# The CMD instruction should be empty for dev containers
CMD ["sleep", "infinity"]
